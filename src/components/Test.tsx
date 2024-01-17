import { defineComponent } from "vue"

export interface TestProps {
    prop1?: string;
    prop2?: number;
}

export default defineComponent<TestProps>({
    name:"Test",
    setup(props = {prop1:'1',prop2:2}){
        return () => (
            <div>
                <h1>{props.prop1} {props.prop2}</h1>
            </div>
        )
    }
})
