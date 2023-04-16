import * as React from 'react';
import CryptoListComponentContainer from './CryptoListComponent.Container';
import * as CryptoActions from "../../redux/actions/crypto.actions"
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
interface Column {
    id: 'image' | 'current_price' | 'total_volume' | 'high_24h';
    label: string;
    minWidth?: number;
    align?: 'right';
    renderCell?: any
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {
        id: 'image', label: 'Name', minWidth: 170,
        renderCell: (params: any) => {
            return (
                    <Avatar src={params.image} />
            );
        },
    },
    {
        id: 'current_price', label: 'Current price', minWidth: 100,
        format: (value: number) => `$${value}`,
    },
    {
        id: 'total_volume', label: 'Total volume', minWidth: 100,
        format: (value: number) => `$${value}`
    },
    { id: 'high_24h', label: 'Range', minWidth: 100 },


];



export default function CryptoListComponentHelper() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const dispatch = useDispatch()
    const coinlist: any = useSelector((user: any) => user.crypto)

    React.useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        dispatch(await CryptoActions.getData("usd", 1, 1000))

    }
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <CryptoListComponentContainer
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
            page={page}
            rows={coinlist.crypoList}
            columns={columns}
            handleChangePage={handleChangePage} />
    );
}
