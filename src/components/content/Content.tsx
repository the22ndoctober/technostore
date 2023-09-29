
import { useSelector,useDispatch } from 'react-redux'
import { selectItem, selectState } from '../../redux/reducers/items'
import CartItem from './CartItem/CartItem'

const Content = () => {

    const items = useSelector(selectState)
    const dispatch = useDispatch()

  return (
    <div>
        {items.map((item:any, id: number)=>{
            return <CartItem
                id={id}
                name={item.name}
                isChecked={item.isChecked}
                cell={item.cell}
                handleChecked={()=>{
                    dispatch(selectItem({type:'SELECT', payload: id}))
                }}
            />
        })}
    </div>
  )
}

export default Content