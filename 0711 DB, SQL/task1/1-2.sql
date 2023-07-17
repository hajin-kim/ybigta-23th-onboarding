SELECT c.categoryName,
    sum(od.quantity) quantity,
    sum(od.quantity * p.price) revenue
FROM categories c
    INNER JOIN products p ON p.categoryId = c.categoryId
    INNER JOIN orderDetails od ON od.productId = p.productId
GROUP BY c.categoryName
HAVING sum(od.quantity) >= 2000;