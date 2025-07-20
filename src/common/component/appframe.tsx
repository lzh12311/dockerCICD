import Header from "./headers";

/**
 * 
 */
type AppFrameProps = {
    children: React.JSX.Element | React.JSX.Element[];


}

const AppFrame: React.FC<AppFrameProps> = props => {

    const build = (): React.JSX.Element => {
        return (
            <div>
                <Header temp="null" />
                {props.children}
            </div>
        )
    }

    return build();
}

export default AppFrame;