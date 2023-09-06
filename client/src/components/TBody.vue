<template>
    <tbody>
        <tr>
            <td>{{ i + 1 }}</td>
            <td>{{ order.name }}</td>
            <td>{{ order.quantity }}</td>
            <td>{{ priceFormat(order.price) }}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: "customTBody",
    props: ["order", "i"],
    methods: {
        priceFormat(price) {
            let rupiah = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(price);
            return rupiah;
        }
    }
}
</script>

<style></style>