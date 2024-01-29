import { defineStore } from 'pinia'

export const useTrelloStore = defineStore('Trello', {
    state: () => {
        return {
            trelloList: [
                {
                    id: 1,
                    title: 'Frontend Tasks',
                    list: [
                        {
                            id: 'sd1qe3asd53',
                            title: 'Make Login page 1',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        },
                        {
                            id: 'sd154asd53',
                            title: 'Make Login page 2',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        },
                        {
                            id: 'r1qe3asd53',
                            title: 'Make Login page 3',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        },
                        {
                            id: 'sd1qe3alokj',
                            title: 'Make Login page 4',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Backend task Tasks',
                    list: [
                        {
                            id: 'sd235dsaasd53',
                            title: 'Make Login function 1',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        },
                        {
                            id: 'w6er5e5r',
                            title: 'Make Login function 2',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        },
                        {
                            id: '78sdfwe5r4',
                            title: 'Make Login function 3',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        },
                        {
                            id: '987wersd1fs32d',
                            title: 'Make Login function 4',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Designer Tasks',
                    list: [
                        {
                            id: '2143sd1qe3asd53',
                            title: 'Make Login page',
                            description: 'make login page with https://exapmle.com/figma/asduqwo8ufjkfnjsdf , connet with backend'
                        }
                    ]
                },
            ]
        }
  }
})