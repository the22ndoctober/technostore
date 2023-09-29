import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'




type ItemProps = {
    id:number
    name: string
    isChecked: boolean
    cell: string
    handleChecked: any
  }

const CartItem = (
    {id,name,isChecked,cell, handleChecked}:ItemProps
) => {
  return (
    <Grid container spacing={0} direction={'row'} columnGap={2} sx={{bgcolor:isChecked?'blue':'',color:isChecked?'white':'black',p:1, maxWidth:550, border: '1px solid green'}} onClick={()=>{
        handleChecked()
    }}>
        <Typography variant="body1" >{id+1+'.'}</Typography>
      <Typography variant="body1" >{name}</Typography>
        <Typography variant="body1">{cell}</Typography>
    </Grid>
  )
}

export default CartItem