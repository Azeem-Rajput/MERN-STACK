const customer={
    name:"Azeem",
    pass:120,
    print:function()
    {
        console.log(`${this.name}--welcome to account`)
    }
}
customer.print()
customer.name="Rajput"
customer.print()