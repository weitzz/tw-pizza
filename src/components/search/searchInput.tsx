import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SearchInput = () => {
    return (
        <div className='flex bg-secondary p-6 rounded-lg max-w-lg mx-auto gap-2'>
            <Input type='search' placeholder='Buscar...' />
            <Button className='bg-orange-600 hover:bg-orange-500'>Buscar</Button>
        </div>
    )
}

export default SearchInput