	var cals = {
		build_marketing: function(){
			$('#arr, #growth, #growth_delta').bind('blur focusout keypress keyup', function(){
				var current_arr = $('#arr').autoNumeric('get'),
					growth = $('#growth').autoNumeric('get'),
					growth_delta = $('#growth_delta').autoNumeric('get'),
					nextYearArr = current_arr*(growth/100),
					nextYearMarketing = nextYearArr*(growth_delta/100),
					nextYearContent = nextYearMarketing*(growth_delta/100);


				$('.output_currentArr').autoNumeric('set', current_arr);
				$('.output_growth').text(growth + '%');
				$('.output_nextYearArr').autoNumeric('set', nextYearArr);
				$('.output_growth_delta').text(growth_delta + '%');
				$('.output_nextYearMarketing').autoNumeric('set',nextYearMarketing)

				// Result
				$('#result_1').autoNumeric('set', nextYearArr);
				$('#result_2').autoNumeric('set', nextYearMarketing);
				$('#result_3').autoNumeric('set', nextYearContent);

			});
		},

		build_ltv: function(){
			$('#sale_marketing, #expect_customer, #monthly').bind('blur focusout keypress keyup', function(){
				var sale_marketing = $('#sale_marketing').autoNumeric('get'),
					expect_customer = $('#expect_customer').autoNumeric('get'),
					monthly = $('#monthly').autoNumeric('get'),
					ecac = sale_marketing/expect_customer,
					result2 = ecac/(monthly*12)*12,
					result3 = (((monthly*12)-ecac)/ecac)*100;
					result4 = ((monthly*12)+(monthly*12))*1.15*((1.15^(36-12))-1)/(1.15-1),
					result5 = result4/monthly;



				$('.output_sale_marketing').autoNumeric('set', sale_marketing);
				$('.output_expect_customer').text(expect_customer);
				$('.output_ecac').autoNumeric('set', ecac);
				$('.output_monthly').autoNumeric('set',monthly);
				$('.output_result_4').autoNumeric('set', result4);

				// Result
				$('#result_1').autoNumeric('set', ecac);
				$('#result_2').autoNumeric('set', result2);
				$('#result_3').autoNumeric('set', result3);
				$('#result_4').autoNumeric('set', result4);
				$('#result_5').autoNumeric('set', result5)
			});
		}
	};
