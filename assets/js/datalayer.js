window.dataLayer = window.dataLayer || [];

//clear DataLayer
document.querySelector('#clear_datalayer').addEventListener('click', function () {
    dataLayer.push({ ecommerce: null });
    window.dataLayer = [];
});

//-------------Content-----------------
//view_item:
document.querySelector('#virtual_pageview').addEventListener('click', function () {
    dataLayer.push({
        event: 'virtual_pageview',
        pagePath: 'https://' + document.location.hostname + '/virtualpath',
        pageTitle: 'Pancake Event Signup',
        visitorType: 'customer'
    });
});

//-------------Ecommerce--------------
//view_item:
document.querySelector('#view_item').addEventListener('click', function () {
    dataLayer.push({
        event: 'view_item',
        ecommerce: {
            currency: 'USD',
            value: 30.03,
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//view_item_list:
document.querySelector('#view_item_list').addEventListener('click', function () {
    dataLayer.push({
        event: 'view_item_list',
        ecommerce: {
            item_list_id: 'related_products',
            item_list_name: 'Related products',
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.03,
                    quantity: 3
                },
                {
                    item_id: 'SKU_12346',
                    item_name: "Google Grey Women's Tee",
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 3.33,
                    index: 1,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'gray',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 21.01,
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    quantity: 2
                }
            ]
        }
    });
});

//select_item:
document.querySelector('#select_item').addEventListener('click', function () {
    dataLayer.push({
        event: 'select_item',
        ecommerce: {
            item_list_id: 'related_products',
            item_list_name: 'Related products',
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//add_to_cart:
document.querySelector('#add_to_cart').addEventListener('click', function () {
    dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
            currency: 'USD',
            value: 30.03,
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//view_cart:
document.querySelector('#view_cart').addEventListener('click', function () {
    dataLayer.push({
        event: 'view_cart',
        ecommerce: {
            currency: 'USD',
            value: 30.03,
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//begin_checkout:
document.querySelector('#begin_checkout').addEventListener('click', function () {
    dataLayer.push({
        event: 'begin_checkout',
        ecommerce: {
            currency: 'USD',
            value: 30.03,
            coupon: 'SUMMER_FUN',
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//add_shipping_info:
document.querySelector('#add_shipping_info').addEventListener('click', function () {
    dataLayer.push({
        event: 'add_shipping_info',
        ecommerce: {
            currency: 'USD',
            value: 30.03,
            coupon: 'SUMMER_FUN',
            shipping_tier: 'Ground',
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//add_payment_info:
document.querySelector('#add_payment_info').addEventListener('click', function () {
    dataLayer.push({
        event: 'add_payment_info',
        ecommerce: {
            currency: 'USD',
            value: 30.03,
            coupon: 'SUMMER_FUN',
            payment_type: 'Credit Card',
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                }
            ]
        }
    });
});
//purchase:
document.querySelector('#purchase').addEventListener('click', function () {
    dataLayer.push({
        event: 'purchase',
        ecommerce: {
            transaction_id: 'T_12345',
            // Sum of (price * quantity) for all items.
            value: 72.05,
            tax: 3.6,
            shipping: 5.99,
            currency: 'USD',
            coupon: 'SUMMER_SALE',
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'green',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 10.01,
                    quantity: 3
                },
                {
                    item_id: 'SKU_12346',
                    item_name: "Google Grey Women's Tee",
                    affiliation: 'Google Merchandise Store',
                    coupon: 'SUMMER_FUN',
                    discount: 3.33,
                    index: 1,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Adult',
                    item_category3: 'Shirts',
                    item_category4: 'Crew',
                    item_category5: 'Short sleeve',
                    item_list_id: 'related_products',
                    item_list_name: 'Related Products',
                    item_variant: 'gray',
                    location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
                    price: 21.01,
                    promotion_id: 'P_12345',
                    promotion_name: 'Summer Sale',
                    quantity: 2
                }
            ]
        }
    });
});
