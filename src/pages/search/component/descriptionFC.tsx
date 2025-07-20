import type { DescriptionsProps } from 'antd'
import type { FC } from 'react'
import { Descriptions } from 'antd'
import 'antd/dist/reset.css'

/**
 * Props for the custom description table component.
 */
export interface TableProps extends DescriptionsProps {
  /**
   * Minimum width (in px) for the label column. Default is 100.
   */
  width?: number;
}

/**
 * A customized description table using Ant Design's Descriptions component.
 * @param props Component props including label width and display items.
 * @returns A JSX.Element rendering the description table.
 */
const DescriptionsFC: FC<TableProps> = (props) => {
  const { width = 100, column = 1, ...restProps } = props;

  return (
    <>
      <style>
        {`
          .custom-descriptions-wrapper .ant-descriptions-item-label {
              justify-content: right;
              color: black;
              min-width: ${width}px;
              background-color: #fff;
          }
        `}
      </style>
      <div className="custom-descriptions-wrapper">
        <Descriptions column={column} {...restProps} />
      </div>
    </>
  )
}

export default DescriptionsFC
