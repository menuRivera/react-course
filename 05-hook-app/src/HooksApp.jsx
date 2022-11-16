import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"
import { FocusScreen } from "./04-useRef/FocusScreen"
import { Layout } from "./05-useLayoutEffect/Layout"
import { MemoHook } from "./06-memos/MemoHook"
import { Memorize } from "./06-memos/Memorize"

export const HooksApp = () => {
    return (
        <>
            <h1>HooksApp</h1>
            <CounterApp />
            <CounterWithCustomHook />
            <SimpleForm />
            <FormWithCustomHook />
            <MultipleCustomHooks />
            <FocusScreen />
            <Layout />
            <Memorize />
            <MemoHook />
        </>
    )
}
