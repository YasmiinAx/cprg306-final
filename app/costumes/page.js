"use client";

import CostumeList from "./costume-list.js";
import costumesData from "./costumes.json";
import Nav from "../navbar/nav.js";
import { useState } from "react";

export default function Page() {
    const [costumes, setCostumes] = useState(costumesData);

    const handleAddCostume = (costume) => {
        setCostumes([...costumes, costume]);
    };

    return (
        <main>
            <Nav />
            <CostumeList costumes={costumes} onAddCostume={handleAddCostume}/>
        </main>
    );
}