import * as Dom from "react-router-dom";

const NavigationKeys = {
    login: "/login",
    home: "/home",
    productDetail: "/product/:id",
    cart: "/cart",
    search: "/search"
};

class Navigator {
    private static navigate: Dom.NavigateFunction | undefined;

    static register(navigate: Dom.NavigateFunction): void {
        Navigator.navigate = navigate;
    }

    static navigateToLogin(): void {
        Navigator.navigate?.(NavigationKeys.login);
    }
    static navigateToHome(): void {
        Navigator.navigate?.(NavigationKeys.home);

    }

    static navigateToProductDetail(productId: string): void {
        Navigator.navigate?.(NavigationKeys.productDetail.replace(":id", productId));
    }
    static navigateToSearch(): void {
        Navigator.navigate?.(NavigationKeys.search);
    }
    static navigateToCart(): void {
        Navigator.navigate?.(NavigationKeys.cart);
    }
}

export { Navigator, NavigationKeys };