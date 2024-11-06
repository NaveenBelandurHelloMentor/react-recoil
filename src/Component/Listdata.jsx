import React from 'react'
import {ListAtomData} from '../Atom/ListAtom'
import {useRecoilState} from 'recoil'

const ListData  = () =>{
    const [data,setData] = useRecoilState(ListAtomData)

    return (
        <>
        <p>Number of the names - {data.length}</p>
        {data.map((data)=>{
            return (
                <>
                <p>{data}</p>
                </>
            )
        })}
        </>
    )
}




export default ListData