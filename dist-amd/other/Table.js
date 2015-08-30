(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","./Paginator","./Bag","css!./Table"],t):e.other_Table=t(e.d3,e.common_HTMLWidget,e.other_Paginator,e.other_Bag)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._currentSort="",this._currentSortOrder=1,this._columns=[],this._paginator=new n,this._selectionBag=new r.Selection,this._selectionPrevClick=null,this._paginatorTableSpacing=4}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" other_Table",i.prototype.testData=function(){var e=[["Label1",37.665074,-122.384375,"green-dot.png",4525,4243545,24354,54,2552345,2455,245435],["Label2",32.69068,-117.17854,"",4525,423545,24354,354,2552345,2455,245435],["Label3",39.709455,-104.969859,"",4525,423545,24354,524,2552345,2455,245435],["Label4",41.244123,-95.96161,"",4525,423545,24354,564,2552345,2455,245435],["Label5",32.68898,-117.19204,"",4525,423545,24354,454,2552345,2455,245435],["Label6",45.78649,-108.5266,"",4525,423545,24354,534,2552345,2455,245435],["Label7",45.79618,-108.535652,"",4525,423545,24354,254,2552345,2455,245435],["Label8",45.77432,-108.49437,"",4525,423545,24354,51,2552345,2455,245435],["Label9",37.665074,-122.384375,"green-dot.png",4525,423545,24354,504,2552345,2455,245435],["Label0",32.69068,-117.17854,"",4525,423545,24304,54,2552345,2455,245435],["Label0",39.709455,-104.969859,"",4525,423545,249354,54,2552345,2455,245435],["Label9",41.244123,-95.96161,"",4525,423545,247354,54,2552345,2455,245435],["Label8",32.68898,-117.19204,"",4525,423545,243654,54,2552345,2455,245435],["Label7",45.78649,-108.5266,"",4525,423545,245354,54,2552345,2455,245435],["Label6",45.79618,-108.535652,"",4525,423545,243354,54,2552345,2455,245435],["Label5",45.77432,-108.49437,"",4525,423545,243454,54,2552345,2455,245435],["Label4",37.665074,-122.384375,"green-dot.png",4525,423545,243254,54,2552345,2455,245435],["Label3",32.69068,-117.17854,"",4525,4243545,24354,54,2552345,2455,245435],["Label2",39.709455,-104.969859,"",4525,4233545,24354,54,2552345,2455,245435],["Label1",41.244123,-95.96161,"",4525,4235145,24354,54,2552345,2455,245435],["Label1",32.68898,-117.19204,"",4525,4523545,24354,54,2552345,2455,245435],["Label2",45.78649,-108.5266,"",4525,4263545,24354,54,2552345,2455,245435],["Label3",45.79618,-108.535652,"",4525,4235745,24354,54,2552345,2455,245435],["Label4",45.77432,-108.49437,"",4525,4235845,24354,54,2552345,2455,245435],["Label5",37.665074,-122.384375,"green-dot.png",4525,423545,24354,54,2552345,2455,245435],["Label6",32.69068,-117.17854,"",4525,423545,24354,54,2552345,20455,245435],["Label7",39.709455,-104.969859,"",4525,423545,24354,54,2552345,24955,245435],["Label8",41.244123,-95.96161,"",4525,423545,24354,54,2552345,24855,245435],["Label9",32.68898,-117.19204,"",4525,423545,24354,54,2552345,27455,245435],["Label0",45.78649,-108.5266,"",4525,423545,24354,54,2552345,24655,245435],["Label0",45.79618,-108.535652,"",4525,423545,24354,54,2552345,24555,245435],["Label9",45.77432,-108.49437,"",4525,423545,24354,54,2552345,24455,245435],["Label8",37.665074,-122.384375,"green-dot.png",4525,423545,24354,54,23552345,2455,245435],["Label7",32.69068,-117.17854,"",4525,423545,24354,54,2552345,2455,2405435],["Label6",39.709455,-104.969859,"",4525,423545,24354,54,2552345,2455,2495435],["Label5",41.244123,-95.96161,"",4525,423545,24354,54,2552345,2455,2454835],["Label4",32.68898,-117.19204,"",4525,423545,24354,54,2552345,2455,2475435],["Label3",45.78649,-108.5266,"",4525,423545,24354,54,2552345,2455,2456435],["Label2",45.79618,-108.535652,"",4525,423545,24354,54,2552345,2455,2455435],["Label1",45.77432,-108.49437,"",4525,423545,24354,54,2552345,2455,2445435],["Label1",45.777062,-108.549835,"red-dot.png",4525,423545,24354,54,25523345,2455,245435]];return this.columns(["Label","Lat","Long","Pin","Forth Column","Fifth Column","sixth Column","Seventh Column","eighth Column","Nineth Column","Tenth Column"]).data(e.concat(e).concat(e).concat(e).concat(e).concat(e).concat(e).concat(e).concat(e).concat(e).concat(e)).fixedHeader(!0).fixedColumn(!0),this},i.prototype.publish("renderHtmlDataCells",!1,"boolean","enable or disable HTML within cells",null,{tags:["Private"]}),i.prototype.publish("pagination",!1,"boolean","Enable or disable pagination",null,{tags:["Private"]}),i.prototype.publish("fixedHeader",!1,"boolean","Enable or disable fixed table header and first column",null,{tags:["Private"]}),i.prototype.publish("fixedColumn",!1,"boolean","Enable or disable fixed first column",null,{tags:["Private"]}),i.prototype.publish("autoCalcIPP",!0,"boolean","Enable or disable auto calculation of items per page",null,{tags:["Basic"]}),i.prototype.publishProxy("itemsPerPage","_paginator"),i.prototype.publishProxy("pageNumber","_paginator","pageNumber",1),i.prototype.size=function(e){var n=t.prototype.size.apply(this,arguments);return arguments.length&&this.tableDiv&&(this.tableDiv.style("width",this._size.width+"px").style("height",this._size.height+"px"),this.headerDiv.style("width",this._size.width+"px").style("height",this._size.height+"px")),n},i.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this._parentElement.style("overflow","hidden"),this.tableDiv=n.append("div").attr("class","tableDiv"),this.table=this.tableDiv.append("table"),this.thead=this.table.append("thead").append("tr"),this.tbody=this.table.append("tbody"),this.headerDiv=n,this.tableDiv.style("overflow","auto"),this.headerDiv.style("width",this.width()+"px").style("height",this.height()+"px")},i.prototype._createSelectionObject=function(e){var t=this;return{_id:e,element:function(){return t.tbody.selectAll("tr").filter(function(t){return t===e})}}},i.prototype._generateTempCell=function(){var e=this.tbody.selectAll("tr").data([[0]]);e.enter().append("tr");var t=e.selectAll("td").data(function(e,t){return e});return t.enter().append("td").text(function(e){return e}),t.exit().remove(),t},i.prototype._calcRowsPerPage=function(e){this._paginator.numItems()===0&&(this._paginator.numItems(1),this.itemsPerPage(1)),this._paginator.render();var t=this.thead.selectAll("th").node().clientHeight;this._generateTempCell();var n=this.tbody.selectAll("tr").node().clientHeight,r=this.calcHeight(this._paginator.element()),i=Math.floor((this.height()-t-r-(this.hasHScroll(this.tableDiv)?this.getScrollbarWidth():0)-this._paginatorTableSpacing*2)/n)||1;return i},i.prototype.update=function(n,r){t.prototype.update.apply(this,arguments);var i=this,s=this.thead.selectAll("th").data(this._columns,function(e){return e});s.enter().append("th").each(function(t){var n=e.select(this);n.append("span").attr("class","thText"),n.append("span").attr("class","thIcon")}).on("click",function(e,t){i.headerClick(e,t)}),s.select(".thText").text(function(e){return e}),s.select(".thIcon").text(function(e,t){return i._currentSortOrder===-1?i._currentSort===t?"":"":i._currentSort===t?"":""}),s.exit().remove();if(this.pagination()){this._paginator.target()===null&&this._paginator.target(r.node());if(this.autoCalcIPP()){var o=this._calcRowsPerPage(s);this.itemsPerPage(o)}this._paginator.numItems(this._data.length),this._tNumPages=Math.ceil(this._paginator.numItems()/this.itemsPerPage())||1,this.pageNumber()>this._tNumPages&&this.pageNumber(1),this._paginator._onSelect=function(e,t){i.pageNumber(e),i.render();return},this.tableDiv.style("overflow-y","hidden")}else this.tableDiv.style("overflow-y",null),this._paginator.numItems(0);var u=this.pageNumber()-1,a=this.itemsPerPage(),f=u*a,l=parseInt(u*a)+parseInt(a),c=null;this.pagination()?c=this._data.slice(f,l):c=this._data;var h=this.tbody.selectAll("tr").data(c);h.enter().append("tr").on("click.selectionBag",function(e){i.selectionBagClick(e),i.render()}).on("click",function(e){i.click(i.rowToObj(e),null,i._selectionBag.isSelected(i._createSelectionObject(e)))}).on("mouseover",function(e,t){var n=i.headerDiv.selectAll(".rows-wrapper tbody tr").filter(function(e,n){return n===t});if(n.empty())return;n.classed("hover",!0);var r=i.table.selectAll("tbody tr").filter(function(e,n){return n===t});r.classed("hover",!0),r.classed("selected")&&n.classed("selected",!0)}).on("mouseout",function(e,t){var n=i.headerDiv.selectAll(".rows-wrapper tbody tr").filter(function(e,n){return n===t});n.classed("hover",!1),i.table.selectAll("tbody tr").filter(function(e,n){return n===t}).classed("hover",!1)}),h.attr("class",function(e){if(i._selectionBag.isSelected(i._createSelectionObject(e)))return"selected"}),h.exit().remove();var p=h.selectAll("td").data(function(e,t){return e});p.enter().append("td"),p[this.renderHtmlDataCells()?"html":"text"](function(e){return typeof e=="string"?e.trim():typeof e=="number"?e:""}),p.exit().remove(),this.data().length&&this.fixedLabelsUpdate(n,r),this._paginator.right((this.hasVScroll(this.tableDiv)?this.getScrollbarWidth():0)+this._paginatorTableSpacing).bottom((this.hasHScroll(this.tableDiv)?this.getScrollbarWidth():0)+this._paginatorTableSpacing).render()},i.prototype.fixedLabelsUpdate=function(t,n){function c(){var c=n.selectAll("th");if(l.fixedHeader()){s.html(a.html()),s.style("width",l.table.style("width"));var h=l._parentElement.selectAll(".cols-wrapper th");c.each(function(t,n){var r=h.filter(function(e,t){return t===n}),i=e.select(this).style("width");r.style("width",i)}),h.on("click",function(e,t){l.headerClick(e,t)}),l.fixedColumn()||u.html("")}var p,d;if(l.fixedColumn()){var v=parseInt(l.table.select("td").style("border-width")),m=l.table.selectAll("tbody > tr > td:first-child");p=l.fixedColumn()?m.node().offsetWidth:0;var g=parseInt(p)+parseInt(2*v),y="<thead><tr>";y+="<th style='width:"+g+"px'>",y+=c.filter(function(e,t){return t===0}).html(),y+="</th></tr></thead>",m.each(function(){y+="<tr><td class='row-label'>"+(this.innerHTML?this.innerHTML:"&nbsp;")+"</td></tr>"}),u.html(y).style("width",p),l.fixedHeader()?(u.select("thead").style("position","absolute").style("width",g+"px"),u.style("margin-top",-t.scrollTop+f+"px"),n.style("top",f+"px")):(u.select("thead").style("margin-top","0px").style("position","relative"),u.style("margin-top",-t.scrollTop+"px"),n.style("top","0px"));var b=u.selectAll("tr");b.on("click",function(t,n){e.select(r[0][n]).on("click.selectionBag")(r.data()[n-1],n-1)}).on("mouseover",function(t,n){e.select(r[0][n]).on("mouseover")(r.data()[n-1],n-1)}).on("mouseout",function(t,n){e.select(r[0][n]).on("mouseout")(r.data()[n-1],n-1)}).attr("class",function(t,n){if(r[0][n-1]&&e.select(r[0][n-1]).classed("selected")===!0)return r[0][n-1].parentElement.querySelector(":hover")===r[0][n-1]?"selected hover":"selected"})}else p=0;d=parseInt(l.headerDiv.node().style.height)-parseInt(f);var w=parseInt(l.headerDiv.node().style.width)-parseInt(p),E=l.table.node().offsetWidth-p+l.getScrollbarWidth(),S=w>E?E:w;l.tableDiv.style("width",S+"px").style("height",d+"px").style("position","absolute").style("top",f+"px").style("left",p+"px").style("overflow","auto"),l.table.style("margin-left","-"+p+"px").style("margin-top","-"+f+"px"),i.style("position","absolute"),o.style("width",p+"px").style("height",d+"px").style("position","absolute"),u.style("margin-top",-l.tableDiv.node().scrollTop+f+"px"),u.select("thead").style("margin-top",l.tableDiv.node().scrollTop-f+"px").on("click",function(e,t){l.headerClick(e,t)})}function h(e){e.onscroll=function(e){var t=e.target.scrollLeft,n=e.target.scrollTop;s.style("margin-left",-t+"px"),u.style("margin-top",-n+f+"px"),u.select("thead").style("margin-top",n-f+"px")}}var r=this.tbody.selectAll("tr"),i=this.headerDiv.selectAll(".cols-wrapper").data(this.fixedHeader()?[0]:[]);i.enter().append("div").attr("class","cols-wrapper").each(function(t){var n=e.select(this);n.append("table").classed("labels-wrapper",!0)}),i.exit().remove();var s=i.select(".labels-wrapper"),o=this.headerDiv.selectAll(".rows-wrapper").data(this.fixedColumn()?[0]:[]);o.enter().append("div").attr("class","rows-wrapper").each(function(t){var n=e.select(this);n.append("table").classed("labels-wrapper",!0)}),o.exit().remove();var u=o.select(".labels-wrapper"),a=this.table.select("thead"),f=this.fixedHeader()?a.node().offsetHeight:0,l=this;c(this._id),h(this.tableDiv.node())},i.prototype.exit=function(e,n){this._paginator.target(null),t.prototype.exit.apply(this,arguments)},i.prototype.headerClick=function(e,t){this._currentSort!==t?(this._currentSort=t,this._currentSortOrder=1):this._currentSortOrder*=-1;var n=this;this._data.sort(function(e,r){return e[t]===r[t]?0:typeof r[t]=="undefined"||e[t]>r[t]?n._currentSortOrder:n._currentSortOrder*-1}),this.render()},i.prototype.selection=function(e){return arguments.length?(this._selectionBag.set(e.map(function(e){return this._createSelectionObject(e)},this)),this):this._selectionBag.get().map(function(e){return e._id})},i.prototype.selectionBagClick=function(t){if(e.event.shiftKey){var n=!1,r=[],i=this._data.filter(function(e,i){var s=!1;if(e===t||e===this._selectionPrevClick)n&&(s=!0),n=!n,r.push(i);return n||s},this);return this.selection(i),r}this._selectionBag.click(this._createSelectionObject(t),e.event),this._selectionPrevClick=t},i.prototype.click=function(e,t){console.log("Click:  "+JSON.stringify(e)+", "+t)},i});