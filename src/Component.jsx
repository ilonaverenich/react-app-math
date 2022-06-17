import { setText } from './redux/actions/setTextAction';
import { useDispatch, useSelector } from 'react-redux'

function Component() {
   const text = useSelector((store) => store.text);
   console.log(text)
   const dispatch = useDispatch();
   return (
      <div>
         <input type='text' value={text} onChange={(e) => dispatch(setText(e.target.value))} />
         <button>Click</button>

      </div>
   )
}

export default Component