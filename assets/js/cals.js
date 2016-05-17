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
		},

		// Education
		build_education: function(){
			$('#age, #education_level, #income').bind('blur focusout keypress keyup change', function(){
				var expunge_increase = 0.4, //40%
					retirement_age = 67,
					age = $('#age').val(),
					income = $('#income').autoNumeric('get'),
					education_level = $('#education_level').val();

				var edu_level_array = [];
					edu_level_array[1] = 973000;
					edu_level_array[2] = 1304000;
					edu_level_array[3] = 1727000;
					edu_level_array[4] = 2268000;
					edu_level_array[5] = 2671000;
					edu_level_array[6] = 3648000;

				var reduce_one_unit_level = Number(education_level) - 1,
					increase_one_unit_level = Number(education_level) + 1,
					increase_two_unit_level = Number(education_level) + 2,
					edu_level_percent = (edu_level_array[education_level] - edu_level_array[reduce_one_unit_level]) / edu_level_array[reduce_one_unit_level],
					edu_level_1_percent = Math.round((edu_level_array[increase_one_unit_level] - edu_level_array[education_level]) / edu_level_array[education_level]*100),
					edu_level_2_percent = Math.round((edu_level_array[increase_two_unit_level] - edu_level_array[increase_one_unit_level]) / edu_level_array[increase_one_unit_level]*100);


				//console.log(Math.round(edu_level_percent*100));
				//console.log(Math.round(edu_level_1_percent*100));
				console.log(edu_level_1_percent);

				var result1 = (retirement_age - age) * (income * expunge_increase);
				var result2 = result1 * (1 + Number((edu_level_1_percent/100)));
				var result3 = result1 * (1 + Number((edu_level_1_percent/100)) + Number((edu_level_2_percent/100)));

				$('.output_age').text(age);
				$('.output_income').autoNumeric('set', income);
				$('.output_level_1_pecent').autoNumeric('set', edu_level_1_percent);
				$('.output_level_2_pecent').autoNumeric('set',edu_level_2_percent);
		

				// Result
				$('#result_1').autoNumeric('set', result1);
				$('#result_2').autoNumeric('set', result2);
				$('#result_3').autoNumeric('set', result3);
			});	
		}
	};
