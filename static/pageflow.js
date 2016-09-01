(function(){

    // example
    // ----------------------

    dw.theme.register('pageflow', 'default', {

        colors: {
            palette: ["#387b94", "#BECCD0", "#dbe78b", "#d73445", "#E2B370"],
            secondary: ["#005b81", "#D94E28", '#C7C6C9', "#CBCBA8", "#C10021", '#626262'],
            context: '#aaa',
            axis: '#888',
            positive: '#387b94',
            negative: '#D94E28',
            background: '#fff',
            contextBackground: '#ffffff',

            gradients: [
                ['#f6f6f6', '#beccd0', '#69a4bf', '#387b94'], // special gradient for MZ #1
                ['#d94e28','#f6a479','#f6f6f6','#83bcc5','#387b94'],  // orange-blue MZ
                ['#b35806','#f1a340','#fee0b6','#f7f7f7','#d8daeb','#998ec3','#542788']
            ],

            categories: [
                ["#387b94", "#BECCD0", "#dbe78b", "#d73445", "#E2B370", "#005b81", "#D94E28", '#C7C6C9', "#CBCBA8", "#C10021", '#626262']
            ]

        },

        padding: {
            bottom: 40,
            left: 5
        }

    });


}).call(this);
