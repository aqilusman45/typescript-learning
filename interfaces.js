function addressLogger(address) {
    return "Your Address is: " + address.house + " " + (address.block === undefined ? '' : address.block) + " " + address.city + " " + address.country;
}
var myAddress = {
    house: '1212',
    // block: 'Block 2',
    city: 'Karachi',
    country: 'Pakistan'
};
console.log(addressLogger(myAddress));
