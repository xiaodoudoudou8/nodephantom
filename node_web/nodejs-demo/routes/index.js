
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var SiteSchema = new mongoose.Schema({
    SiteID: { type: Number, required: false },
    SiteUrl: { type: String, required: false }
});
var SiteModel = mongoose.model('Site-test-ajax', SiteSchema);
//var phantom = require('node-phantom');

exports.index = function(req, res){
  res.render('index', { title: 'Investopedia CN - Test Form' });
};


/*exports.list = function(req, res){
    var Site1;
    console.log("POST:");
    console.log(req.body);
    Site1 = new SiteModel({
        SiteUrl: req.body.site_url
    });
    Site1.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    console.log('chulai ');*/
// file name: phantomTest.js
 /*   var page_date = phantom.create(function(err, ph) {
        return ph.createPage(function(err, page) {
            return page.open(req.body.site_url, function(err, status) {
                console.log('opened '+req.body.site_url+'?', status);
                //page.render('dd.png');
                page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
                    setTimeout(function(){
                        return page.evaluate(function(){
                        	var history;
                            var title;
                            title = $('title').html();
                            return title
                        },function(err, result){
                            console.log(result);
                        });
                    },5000);
                });
            });
        });
        ph.exit();
    });*/
	//console.log('chulai------- ');
/*    SiteModel.find( function (err, Sites) {
            if (!err) {
				res.render('index', { title: req.body.site_url, sitedata:Sites });
                return console.log(req.body.site_url);
            } else {
                res.render('index', { title: '出错了', sitedata:{} });
                return console.log(err);
            }
        });*/



//};

