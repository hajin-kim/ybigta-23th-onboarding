SELECT c.customerId,
    sum(od.quantity * p.price) revenue
FROM customers c
    INNER JOIN orders o ON o.customerId = c.customerId
    INNER JOIN orderDetails od ON od.orderId = o.orderId
    INNER JOIN products p ON p.productId = od.productId
GROUP BY c.customerId