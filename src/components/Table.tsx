import {memo} from 'react';
import {CreditOutputData} from '../types/types';
import {Column, Table as VirtualTable, AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';

interface TableProps {
    outputData: CreditOutputData[];
}

const Table = memo(({outputData}: TableProps) => {
    return (
        <div className="resultTable">
            <AutoSizer>
                {({height, width}) => (
                    <VirtualTable
                        gridStyle={{outline: 'none'}}
                        width={width}
                        height={height}
                        headerHeight={20}
                        rowHeight={70}
                        rowCount={outputData.length}
                        rowGetter={({index}) => outputData[index]}
                    >
                        <Column width={100} label="Месяц" dataKey="month" />
                        <Column width={200} label="Остаток" dataKey="remaining" />
                        <Column width={200} label="Платёж" dataKey="payment" />
                        <Column width={200} label="Долг. часть" dataKey="debt" />
                        <Column width={200} label="% часть" dataKey="interest" />
                    </VirtualTable>
                )}
            </AutoSizer>
        </div>
    );
});

export default Table;
