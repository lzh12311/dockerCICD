import { Mutex, MutexInterface } from "async-mutex";


class AsyncLock {

    /**
     * 创建一个全局mutex对象，用来监管这个锁是否是在被使用
     * 目的是为了防止同一时间同时存入两个相同的锁
     */
    private static checkMutex = new Mutex();

    private static mutexMap = new Map<string, Mutex>();

    public static isBusy(key: string): boolean {
        return AsyncLock.mutexMap.has(key) && AsyncLock.mutexMap.get(key)!.isLocked();
    }
    static async remove(key: string): Promise<void> {
        const release = await AsyncLock.acquire(key);
        AsyncLock.mutexMap.delete(key);
        release();
    }
    private static async acquire(key: string): Promise<MutexInterface.Releaser> {
        const release = await AsyncLock.checkMutex.acquire();
        if (AsyncLock.mutexMap.has(key)) {
            release();
            return AsyncLock.mutexMap.get(key)!.acquire();
        } else {
            const mutex = new Mutex();
            this.mutexMap.set(key, mutex);
            release();
            return mutex.acquire();
        }
    }
    private static async acquireIfNotBusy(key: string): Promise<MutexInterface.Releaser | undefined> {
        const release = await AsyncLock.checkMutex.acquire();
        if (AsyncLock.mutexMap.has(key) && AsyncLock.mutexMap.get(key)?.isLocked) {
            release()
            return undefined;
        } else {
            const mutex = new Mutex();
            AsyncLock.mutexMap.set(key, mutex);
            release();
            return mutex.acquire();
        }
    }

    private static async releaseAfterRunning<T>(release: MutexInterface.Releaser, func: () => T | PromiseLike<T>): Promise<T> {
        try {
            return await func();
        } finally {
            release();
        }
    }
    static async runIfNotBusy<T>(key: string, func: () => T | PromiseLike<T>): Promise<T | undefined> {
        const release = await AsyncLock.acquireIfNotBusy(key);
        console.log("我在这里")
        if (release) {
            console.log("我在这里执行了 release after running")
            return this.releaseAfterRunning(release, func);
        }
    }

    static async runAfterAcquired<T>(key: string, func: () => T | PromiseLike<T>): Promise<T> {
        return this.releaseAfterRunning(await AsyncLock.acquire(key), func);
    }
}

export { AsyncLock, }