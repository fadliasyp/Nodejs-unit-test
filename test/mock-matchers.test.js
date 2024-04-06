import { getBalance } from "../src/async";
import { calculate } from "../src/sum";

test('mock matchers',  ()=>{
    const callback = jest.fn();

    calculate([10, 10, 10], callback)
    calculate([10, 10, 10, 10, 10], callback)
    expect(callback.mock.calls.length).toBe(2)
    
    //mock matcher 
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenCalledWith(50)
})
