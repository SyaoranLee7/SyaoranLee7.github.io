import Layout from "@/layout";

const applicationRouter = {
    path: "/application",
    component: Layout,
    redirect: "noRedirect",
    name: "Application",
    meta: {
        title: "应用"
    },
    children: [
        {
            path: "GameOfLife",
            component: () => import("@/views/application/GameOfLife/GameOfLife.vue"),
            name: "GameOfLife",
            meta: { title: "生命游戏" }
        },
        {
            path: "Loans",
            component: () => import("@/views/application/Loans/Loans.vue"),
            name: "Loans",
            meta: { title: "房贷还款计算器(i)" }
        },
        {
            path: "pokemon",
            component: () => import("@/views/application/Pokemon/index.vue"),
            name: "Pokemon",
            meta: { title: "Pokemon(i)" }
        },
        {
            path: "MyPlan",
            component: () => import("@/views/application/MyPlan/index.vue"),
            name: "MyPlan",
            meta: { title: "个人计划" }
        }
    ]
};

export default applicationRouter;
