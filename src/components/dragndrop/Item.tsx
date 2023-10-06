import { useMemo } from "react"

type ItemProps = {
    id: string
    name: string
    type: "service" | "category"
    values: ItemProps[]
}

const Item: React.FC<ItemProps> = ({ id, name, type, values }) => {
    const rowGap = useMemo(() => {
        return values.length > 1 ? "50px" : "25px"
    }, [values])

    return (
        <div className="items" style={{ rowGap: rowGap }}>
            <div className="category">
                <div className="item">
                    <div className="lineUp">
                        <div
                            style={{
                                position: "relative",
                            }}
                        >
                            <div
                                className="lineMiddle"
                                style={{
                                    width:
                                        id[id.length - 1] === "0"
                                            ? 732.359375 - 368.875
                                            : 0,
                                }}
                            />
                        </div>
                    </div>
                    <div>{name}</div>
                    <div className={values.length > 0 ? "lineDown" : ""} />
                </div>
                <div className="item__buttonAdd">
                    <button>+</button>
                </div>
            </div>
            <div className="categoryChildren">
                {values.length > 0 &&
                    values.map((item: any) => (
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
    )
}

export default Item
