/**
 * Задача повышенной сложности. Её делать необязательно,
 * но она поможет лучше разобраться с тем, как работают
 * асинхронные запросы. Это задание будет довольно тщательно
 * проверено и по нему будет персональная обратная связь.
 * Делать по желанию и возможности.
 *
 * Напишите функцию makeRequests(urls, maxRequests), получающую
 * на вход массив ссылок urls и число maxRequests - максимальное
 * количество одновременных запросов. Запросы должны выполняться 
 * максимально быстрым образом. 
 * 
 * Пример: массив длинной 10, максимальное кол-во запросов 3.
 * Сразу делаете 3 запроса. Как только любой из них выполнился, 
 * сразу же начинать делать 4ый, а не дожидаетесь окончания двух других.
 * 
 * Условия:
 * 1. Одновременно должно выполняться не более указанного
 *    числа запросов.
 * 2. Должен возвращаться promise, резолвящийся в массив результатов
 *    в той же последовательности, что и адреса запросов.
 * 3. Представить, что все запросы успешно резолвятся и не обрабатывать
 *    ошибки.
 * 4. Если успешно справился с тремя пунктами, то реализовать такую логику:
 *    При падении любого из запросов вернувшийся промис
 *    должен реджектиться с той же ошибкой, что и оригинальный
 *    запрос.
 *
 * @param  {string[]} urls      массив с адресами
 * @param  {number} maxRequests максимальное количество одновременных запросов
 * @return {Promise}
 */
export const makeRequests = (urls, maxRequests) => {
    return new Promise((resolve, reject) => {
        let countRequsts = 0,
            queuePromises = [];

        makeQueue(urls, maxRequests);

        function makeQueue(urls, maxRequests) {
            new Promise((resolve, reject) => {
                while (countRequsts < maxRequests && urls.length) {
                    queuePromises.push(fetch(urls.pop()));
                    ++countRequsts;
                }
                if (!urls.length) {
                    reject()
                } else {
                    resolve()
                }
            }).then( 
                value => 
                { 
                    Promise.race(queuePromises).then( 
                        value => 
                        {
                            --countRequsts;
                            makeQueue(urls, maxRequests);
                        }, 
                        reason => { 
                            reject(reason); 
                        }); 
                },
                reason => { resolve(queuePromises.reverse()); }
            );
        }
    });
};
