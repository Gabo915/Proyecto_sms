import {NextResponse} from 'next/server';
import twilio from 'twilio'

const accountSid = 'ACeceea8b0cff5d3c6794ac33c07f18e82'
const authToken = 'e51cc7dd1b236feb93016ecf46b80416'

const client = twilio (accountSid, authToken);
console.log(accountSid, authToken)

export async function POST (request){
    try {
        const data = await request.json()

        const mensaje = await client.messages.create({
            body: data.message,
            from: +12054633349, // From a valid Twilio number
            to: data.phone
        })
        console.log(mensaje.sid)
    
        return NextResponse.json({message: 'Message sent'})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Message not sent'}, {status: 500})

    }
}


/*export async function GET (){
    try {
        const mensaje = await client.messages.create({
            body: 'Hello from Node',
            from: +12054633349, // From a valid Twilio number
            to: +526677980933,  // Text this number
        })
        console.log(mensaje.sid)
    
        return NextResponse.json({message: 'Message sent'})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Message not sent'}, {status: 500})

    }
}*/