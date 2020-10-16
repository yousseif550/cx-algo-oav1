function marsos (str) {
    const count = str.length
    const Message = 'SOS'.repeat(count)

    let help = 0

    for (let i=0; i<str.length; i++){
        if (str[i] !== Message[i]) {
            help++
        }
  
    }



    return help
}

console.log(marsos("SOFSOSSISSOW"))