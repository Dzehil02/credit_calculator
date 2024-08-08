import { CreditOutputData } from "../types/types"

interface TableProps {
  outputData: CreditOutputData[]
}

function Table({outputData}: TableProps) {

    return (
        <div className="output">
            <table className="table">
                <thead>
                    <tr>
                    <th>Месяц</th>
                    <th>Остаток</th>
                    <th>Платеж</th>
                    <th>Долговая часть</th>
                    <th>Процентная часть</th>
                    </tr>
                </thead>
                <tbody>
                    {outputData.map((data) => (
                    <tr key={data.month}>
                        <td>{data.month}</td>
                        <td>{data.remaining}</td>
                        <td>{data.payment}</td>
                        <td>{data.debt}</td>
                        <td>{data.interest}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }
  
  export default Table