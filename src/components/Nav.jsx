import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Navbar, Typography, Input, Button } from "@material-tailwind/react";

function Nav() {
    const { handelSearch } = useContext(Context);

    const searchBtn = document.getElementById("search-btn");
    
    const handelKeyDown = (e) => {if (e.key === "Enter") searchBtn.click()};

    return (
        <Navbar color="transparent" className="mx-auto max-w-screen-xl px-4 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h1"
                    className="mr-4 ml-2 cursor-pointer py-1.5 text-4xl flex justify-center items-center gap-2"
                >
                    InfinityGif
                    <img className="w-[50px] h-[50px]" src="./img/Infinity-logo.png" alt="Infinity-logo" />
                </Typography>
                <div className="relative flex w-full gap-2 md:w-max">
                    <Input
                        id="search"
                        type="search"
                        label="Type here..."
                        onKeyDown={handelKeyDown}
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        id="search-btn"
                        onClick={() => handelSearch(document.getElementById("search").value)}
                        size="sm" className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}

export default Nav