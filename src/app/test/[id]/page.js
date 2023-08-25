import Image from 'next/image'
import Link from 'next/link'
export default function list({params}){
    const id = params.id
    return(
        <>
         {id}

        </>
    )
}