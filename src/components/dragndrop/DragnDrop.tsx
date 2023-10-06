import { useEffect, useState, useMemo } from "react"
import Item from "./Item"

type Cordinates = {
    x: number
    y: number
}

const DragnDrop = () => {
    const [cordinates, setCordinates] = useState<Cordinates>({ x: 0, y: 0 })
    const [startPoint, setStartPoint] = useState<Cordinates>({ x: 0, y: 0 })

    const redux = {
        items: [
            {
                id: "0",
                name: "Category1",
                type: "category",
                values: [
                    {
                        id: "00",
                        name: "Category21",
                        type: "category",
                        values: [],
                    },
                    {
                        id: "01",
                        name: "Category2",
                        type: "category",
                        values: [],
                    },
                ],
            },
            {
                id: "1",
                name: "Category2",
                type: "category",
                values: [],
            },
            {
                id: "2",
                name: "Category2",
                type: "category",
                values: [],
            },
        ],
    }

    const rowGap = useMemo(() => {
        return redux.items.length > 1 ? "50px" : "25px"
    }, [redux])

    return (
        <div
            style={{
                width: 800,
                height: 800,
                position: "relative",
                margin: "0 auto",
                backgroundColor: "grey",
                border: "2px border red",
                overflow: "hidden",
            }}
            onDragOver={(e) => {
                e.preventDefault()
            }}
        >
            <div
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                    setStartPoint({
                        x: e.clientX,
                        y: e.clientY,
                    })
                }}
                onDragEnd={(e: React.DragEvent<HTMLDivElement>) => {
                    const differenceX = startPoint.x - e.clientX
                    const differenceY = startPoint.y - e.clientY
                    console.log(differenceX)
                    console.log(differenceY)
                    console.log(cordinates.x - differenceX)
                    console.log(cordinates.y - differenceY)

                    setCordinates((state: Cordinates) => ({
                        x: state.x - differenceX,
                        y: state.y - differenceY,
                    }))
                }}
                className="items"
                draggable={true}
                style={{
                    position: "absolute",
                    left: cordinates.x,
                    top: cordinates.y,
                    cursor: "move",
                    rowGap: rowGap,
                }}
            >
                <div className="headCategory">
                    <div className="item">
                        <div>Category 1</div>
                        <div
                            className={redux.items.length > 0 ? "lineDown" : ""}
                        ></div>
                    </div>
                    <div className="item__buttons">
                        <button className="item__buttonAdd">+</button>
                    </div>
                </div>
                <div className="categoryChildren">
                    {redux.items.map((item: any) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            values={item.values}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DragnDrop
