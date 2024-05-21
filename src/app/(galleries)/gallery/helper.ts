import { StaticImageData } from "next/image";
import Img1 from "@/asserts/Person1.png"
import Img2 from "@/asserts/Person2.png"
import Img3 from "@/asserts/Person3.png"
import Img4 from "@/asserts/Person1.png"
import Img5 from "@/asserts/Person2.png"
import Img6 from "@/asserts/Person3.png"

interface Photos {
    id: any;
    name: string;
    url: StaticImageData;
    author: string;
}
export const photo: Photos[] = [
    { id: 1, name: "Person 1", url: Img1, author: "Sunil" },
    { id: 2, name: "Person 2", url: Img2, author: "Raju" },
    { id: 3, name: "Person 3", url: Img3, author: "Kiran" },
    { id: 4, name: "Person 1", url: Img4, author: "Sunil" },
    { id: 5, name: "Person 2", url: Img5, author: "Raju" },
    { id: 6, name: "Person 3", url: Img6, author: "Kiran" }]