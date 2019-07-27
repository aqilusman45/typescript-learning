interface Address{
    house: string,
    block?: string,
    city: string,
    country: string
}

function addressLogger(address: Address): string{
        return `Your Address is: ${address.house} ${address.block === undefined? '': address.block } ${address.city} ${address.country}`
}

let myAddress: Address = {
    house: '1212',
    // block: 'Block 2',
    city: 'Karachi',
    country: 'Pakistan'
}

console.log(addressLogger(myAddress));
