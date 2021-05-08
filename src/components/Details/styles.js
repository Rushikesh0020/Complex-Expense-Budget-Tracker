import { makeStyles } from '@material-ui/core';

export default makeStyles(()=>({
    income: {
        //green
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
    expense: {
        //red
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
    }
}));