export type WishProduct = {
    _id: string;
    title: string;
    imageCover: string;
    price: number;

    category: {
        _id: string
        name: string
        slug: string
        image: string
        createdAt: string
        updatedAt: string
    }
};
export type WishListSuccess = {
    status: "success";
    count: number;

    data: {
        products: WishProduct[];
    };
};


export type WishListContextType = {
    addProduct: WishProduct[];
    isLoading: boolean;
    addProToWishList: (id: string) => Promise<any>;
    removeWishListPro: (id: string) => Promise<any>;
};


export type WishListFail = {
    statusMsg: "fail";
    message: string;
};

export type WishListResponse = WishListSuccess | WishListFail;