import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

type TextAreaProps = {
    /**
     * 
     */
    content: string;
}

const textAreaFC: FC<TextAreaProps> = props => {
    return (
        <TextArea
            value={props.content} 
            readOnly
            autoSize={{ minRows: 3, maxRows: 3 }}
            style={{ resize: 'none' }}
            bordered={false}
        />
    )
}

export default textAreaFC;
