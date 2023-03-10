import Main from "@/components/Main.vue";
import ProblemList from "@/components/ProblemList.vue";
import ProblemForm from "@/components/ProblemForm.vue";
import ProblemPage from "@/components/ProblemPage.vue";

const routers = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '',
                component: ProblemList
            },
            {
                path: 'problem/form',
                component: ProblemForm
            },
            {
                path: 'problem/page',
                component: ProblemPage
            }
        ]
    }

]
export default routers