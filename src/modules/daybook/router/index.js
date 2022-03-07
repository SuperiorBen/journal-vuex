export default {
    name: 'daybook',
    component: () => import('@/modules/daybook/layouts/DaybookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import('../views/NoEntrySelected.vue')
        },
        {
            path:':id',
            name:'entry-view',
            component:()=>import('../views/EntryView.vue')
        }
    ]
}