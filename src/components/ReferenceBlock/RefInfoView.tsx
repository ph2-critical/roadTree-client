import { reference } from "@/roadmap_json/roadmap_data";

export default function RefInfoView(props: {
    refdata: reference;
    className?: string;
}) {
    const refdata: reference = props.refdata;
    const className: string = props.className ?? "";

    return (
        <div className={"max-w-full " + className}>
            {refdata.amount !== "0" && refdata.amount
                ? refdata.amount + " | "
                : ""}
            {refdata.price ? refdata.price.toLocaleString() + "원 | " : ""}
            {refdata.category}
        </div>
    )
}