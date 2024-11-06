import React from 'react'
import {ListAtomData} from '../Atom/ListAtom'
import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'


const AddData = () =>{
    const [text,settext] = useRecoilState(ListAtomData)
    const TextData = useRecoilValue(ListAtomData)

    const handleClick = () =>{
        settext([...text,'newData'])
    }
    return (
        <>
        <p>This is only display the value not changing - {TextData}</p>
        <button onClick={handleClick}>Add Data</button>
        </>
    )
}





export default AddData