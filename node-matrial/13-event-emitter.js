import { EventEmitter } from "events";

const customEmitter = new EventEmitter();
customEmitter.on('response',(name,id)=>{
    console.log(`data received from ${name} with id:${id}`);
}
)
customEmitter.emit('response','Rushi',34)


//  first listen the event and then emit the event otherwise it will not work.
//  we can also pass the arguments in the emit function and receive it in the listener function.
// we can also have multiple listeners for the same event and they will be executed in the order they were registered.
// on and emit are the methods of the EventEmitter class. on is used to register a listener for an event and emit is used to trigger an event.
// keep track of the events and their listeners in your application to avoid memory leaks and unexpected behavior.  