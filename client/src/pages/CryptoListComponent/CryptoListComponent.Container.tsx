import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { cryptoListType } from './CryptoListType';
import "./CryptoList.scss"
const CryptoListComponentContainer = (props: cryptoListType) => {
    return <Paper className='paper'>
        <TableContainer >
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {props.columns.map((column: any) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props?.rows?.
                        slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
                        .map((row: any) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    <TableCell key={"name"} align={"left"}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',

                                        }}>
                                            <img src={row.image} className="cryptoIcon" />&nbsp;
                                            <span className='title'>{row.symbol.toUpperCase()}</span>&nbsp;
                                            <span className='namer'>{row.name}</span>

                                        </div>
                                    </TableCell>
                                    <TableCell key={"current_price"} align={'left'}>
                                        $ {row.current_price}
                                    </TableCell>
                                    <TableCell key={"total_volume"} align={'left'}>
                                        $ {row.total_volume}
                                    </TableCell>
                                    <TableCell key={"high_24h"} align={'left'}>
                                        {row.high_24h.toLocaleString('en-US')}$ - {row.low_24h.toLocaleString('en-US')}$
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={props.rows.length}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onPageChange={props.handleChangePage}
            onRowsPerPageChange={props.handleChangeRowsPerPage}
        />
    </Paper>
}
export default CryptoListComponentContainer;