// import { sortBy } from "lodash"
export const convertMenu = (array) => {
	const routes = []

	array.forEach(item => {
		let editingItem = routes

        // if (item.path === "") {
        //     item.path = "/index"
        // }
		const keyList = item.path.split('/')
		keyList.shift()

		let uniName = ""

		keyList.forEach((key, idx) => {
			uniName += (uniName === "" ? key : "-" + key)

            if (!editingItem) {
                debugger
            }
			let itemm = editingItem.find(i => i.uid === uniName)

			if (itemm == null) {

				itemm = {
					uid: uniName,
					// title: uniName,
					// icon: 'sidebar-menu',
					// path: "/" + key,
					path: idx < keyList.length - 1 ? null : item.path,
					children: idx < keyList.length - 1 ? [] : null,
					// component: idx < keyList.length - 1 ? item.layout : item.component,
					meta: {
						...item.meta,
                        title: idx < keyList.length - 1 ? (item.meta.parentTitle || uniName) : (item.meta.title || uniName),
						icon: idx < keyList.length - 1 ? (item.meta.parentIcon) : (item.meta.icon), // || 'sidebar-menu'
					}
				}
				editingItem.push(itemm)
			}

			editingItem = itemm.children
		})

	})

	return routes
}



// const array = [
//     {
//         "path": "/",
//         "component": {
//             "__hmrId": "a83bd3b0",
//             "__file": "E:/workspace-javascript/demo-fantasic-admin/src/views/index.vue"
//         },
//         "children": [],
//         "name": "index",
//         "meta": {}
//     },
//     {
//         "name": "all",
//         "path": "/:all(.*)*",
//         "props": true,
//         "meta": {
//             "layout": false,
//             "title": "找不到页面"
//         }
//     },
//     {
//         "path": "/01-demo1/02-second",
//         "children": [],
//         "name": "01-demo1-02-second",
//         "meta": {}
//     },
//     {
//         "path": "/01-demo1/01-first/02-nest",
//         "children": [],
//         "name": "01-demo1-01-first-02-nest",
//         "meta": {
//             "layout": "example"
//         }
//     },
//     {
//         "path": "/01-demo1/01-first/01-nest/01-nest-nest2",
//         "children": [],
//         "name": "01-demo1-01-first-01-nest-01-nest-nest2",
//         "meta": {
//             "layout": "index"
//         }
//     },
//     {
//         "path": "/01-demo1/01-first/01-nest/01-nest-nest1",
//         "children": [],
//         "name": "01-demo1-01-first-01-nest-01-nest-nest1",
//         "meta": {
//             "layout": "index"
//         }
//     }
// ]

// const routes = convertMenu(array)

// console.log(JSON.stringify(routes, null, 2))