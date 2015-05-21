QUnit.test("AbstractType.getPeriodInMonths", function(assert) {
    assert.equal(AbstractType.getPeriodInMonths(1), 0);
    assert.equal(AbstractType.getPeriodInMonths(29), 0);
    assert.equal(AbstractType.getPeriodInMonths(30), 1);
    assert.equal(AbstractType.getPeriodInMonths(60), 2);
    assert.equal(AbstractType.getPeriodInMonths(361), 12);
    assert.equal(AbstractType.getPeriodInMonths(721), 24);
    assert.equal(AbstractType.getPeriodInMonths(1081), 36);
});

QUnit.test("AbstractType.calculateIof", function(assert) {
    // expected, amount, period
    var dataProvider = [
        [0, 100, 0],
        [96, 100, 1],
        [93, 100, 2],
        [90, 100, 3],
        [86, 100, 4],
        [83, 100, 5],
        [80, 100, 6],
        [76, 100, 7],
        [73, 100, 8],
        [70, 100, 9],
        [66, 100, 10],
        [63, 100, 11],
        [60, 100, 12],
        [56, 100, 13],
        [53, 100, 14],
        [50, 100, 15],
        [46, 100, 16],
        [43, 100, 17],
        [40, 100, 18],
        [36, 100, 19],
        [33, 100, 20],
        [30, 100, 21],
        [26, 100, 22],
        [23, 100, 23],
        [20, 100, 24],
        [16, 100, 25],
        [13, 100, 26],
        [10, 100, 27],
        [6, 100, 28],
        [3, 100, 29],
        [0, 100, 30],
        [0, 100, 31],
        [0, 100, 3000],
        [0, 100, 100],
        [0, 100, -1],
        [0, 0, 15],
        [0.43, 0.50, 4],
        [0.22, 0.50, 17],
    ];
    dataProvider.forEach(function(item){
        assert.equal(AbstractType.calculateIof(item[1], item[2]), item[0]);
    });
});

QUnit.test("AbstractType.calculateIrpf", function(assert) {
    // expected branch, expected value, amount, period
    var dataProvider = [
        [22.5, 22.50, 100, 0],
        [22.5, 22.50, 100, 1],
        [22.5, 22.50, 100, 30],
        [22.5, 22.50, 100, 90],
        [22.5, 22.50, 100, 180],
        [22.5, 0.23, 1, 90],
        [20, 20, 100, 181],
        [20, 20, 100, 240],
        [20, 20, 100, 360],
        [20, 0.10, 0.50, 240],
        [17.5, 17.5, 100, 361],
        [17.5, 17.5, 100, 720],
        [17.5, 0.18, 1, 540],
        [15, 15, 100, 721],
        [15, 15, 100, 1081],
        [15, 15, 100, 1800],
        [15, 0.08, 0.50, 730],
    ];

    var result = null;

    dataProvider.forEach(function(item){
        result = AbstractType.calculateIrpf(item[2], item[3]);
        assert.deepEqual(result, {'branch': item[0], 'amount': item[1]});
    });
});

QUnit.test("PoupancaType.calculate", function(assert) {
    // expected net, expected interest, amount, period
    var dataProvider = [
        [1000, 0, 1000, 0],
        [1000, 0, 1000, 1],
        [1000, 0, 1000, 28],
        [1005, 5, 1000, 30],
        [1010.02, 10.02, 1000, 60],
        [1015.08, 15.08, 1000, 90],
        [1061.68, 61.68, 1000, 360],
        [1127.16, 127.16, 1000, 720],
    ];

    var result = null;

    dataProvider.forEach(function(item){
        result = PoupancaType.calculate(item[2], item[3]);
        assert.deepEqual(result, {'net': item[0], 'interest': item[1]});
    });
});
