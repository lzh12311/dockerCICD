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
            value={props.content} // 确保 child 是字符串（可根据实际数据处理）
            readOnly
            autoSize={{ minRows: 3, maxRows: 3 }}
            style={{ resize: 'none' }}
            bordered={false}
        />
    )
}

export default textAreaFC;
