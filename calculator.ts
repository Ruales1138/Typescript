type Operation = 'multiply' | 'add' | 'divide'
type Result = number

const calculator = (a: number, b: number, op: Operation ): Result => {
    if(op === 'multiply') return a * b
    if(op === 'add') return a + b

    if(op === 'divide') {
        if(b === 0) throw new Error('can\t divide by 0!')
        return a / b
    }

    throw new Error('Operation is not valid')
}

try {
    console.log(calculator(6, 0, 'divide'))
} catch (error) {
    console.log('Something went wrong', error)
}