(function(e,t){typeof define=="function"&&define.amd?define(["./Common","../api/INDChart"],t):e.c3chart_CommonND=t(e.c3chart_Common,e.api_INDChart)})(this,function(e,t){function n(n){e.call(this),t.call(this);var r=this;this._config.color={pattern:this._palette.colors()},this._config.data.onclick=function(e,t){r.click(r.rowToObj(r._data[e.index]),e.id)},this._config.data.color=function(e,t){return r._palette(t.id?t.id:t)}}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype._class+=" c3chart_CommonND",n.prototype.implements(t.prototype),n.prototype.publish("paletteID","default","set","Palette ID",n.prototype._palette.switch(),{tags:["Basic","Shared"]}),n.prototype.publish("axisLineWidth",1,"number","Axis Line Width",null,{tags:["Intermediate","Shared"]}),n.prototype.publish("xAxisBaselineColor",null,"html-color","X Axis Baseline Color",null,{tags:["Basic","Shared"]}),n.prototype.publish("yAxisBaselineColor",null,"html-color","Y Axis Baseline Color",null,{tags:["Basic","Shared"]}),n.prototype.publish("xAxisFontColor",null,"html-color","X Axis Text Font Color",null,{tags:["Basic","Shared"]}),n.prototype.publish("yAxisFontColor",null,"html-color","Y Axis Text Font Color",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisFontSize",null,"number","X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisFontFamily",null,"string","X/Y Axis Text Font Name",null,{tags:["Basic","Shared"]}),n.prototype.publish("xAxisLabelRotation",0,"number","X Axis Label Angle",null,{tags:["Intermediate","Shared"]}),n.prototype.publish("yAxisTitle","","string","Y-Axis Title",null,{tags:["Intermediate","Shared"]}),n.prototype.publish("xAxisTitle","","string","X-Axis Title",null,{tags:["Intermediate","Shared"]}),n.prototype.publish("xAxisTitleFontColor",null,"html-color","Horizontal Axis Title Text Style (Color)",null,{tags:["Advanced","Shared"]}),n.prototype.publish("xAxisTitleFontFamily",null,"string","Horizontal Axis Title Text Style (Font Name)",null,{tags:["Advanced","Shared"]}),n.prototype.publish("xAxisTitleFontSize",null,"number","Horizontal Axis Title Text Style (Font Size)",null,{tags:["Advanced","Shared"]}),n.prototype.publish("yAxisTitleFontColor",null,"html-color","Vertical Axis Title Text Style (Color)",null,{tags:["Advanced","Shared"]}),n.prototype.publish("yAxisTitleFontFamily",null,"string","Vertical Axis Title Text Style (Font Name)",null,{tags:["Advanced","Shared"]}),n.prototype.publish("yAxisTitleFontSize",null,"number","Vertical Axis Title Text Style (Font Size)",null,{tags:["Advanced","Shared"]}),n.prototype.publish("xAxisType","category","set","X-Axis Type",["category","timeseries","indexed"],{tags:["Intermediate"]}),n.prototype.publish("subchart",!1,"boolean","Show SubChart",null,{tags:["Private"]}),n.prototype.publish("showXGrid",!1,"boolean","Show X Grid",null,{tags:["Intermediate"]}),n.prototype.publish("showYGrid",!1,"boolean","Show Y Grid",null,{tags:["Intermediate"]}),n.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),n.prototype.enter=function(t,n){this.subchart()&&(this._config.subchart={show:!0,size:{height:20}}),this._config.axis.x={type:this.xAxisType(),tick:{rotate:this.xAxisLabelRotation(),multiline:!1},label:{text:this.xAxisTitle(),position:"outer-center"}},this._config.axis.y={label:{text:this.yAxisTitle(),position:"outer-center"}},this._config.grid={x:{show:this.showXGrid()},y:{show:this.showYGrid()}};switch(this.xAxisType()){case"category":this._config.axis.tick={centered:!0,multiline:!1};break;case"timeseries":this._config.data.x=this._columns[0],this._config.axis.tick={format:"%d %b %Y"}}e.prototype.enter.apply(this,arguments)},n.prototype.update=function(t,n){e.prototype.update.apply(this,arguments),this._palette=this._palette.switch(this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id())),n.selectAll(".c3 svg").style({"font-size":this.axisFontSize()+"px"}),n.selectAll(".c3 svg text").style({"font-family":this.axisFontFamily()}),n.selectAll(".c3 .c3-axis.c3-axis-x text").style({fill:this.xAxisFontColor()}),n.selectAll(".c3 .c3-axis.c3-axis-y text").style({fill:this.yAxisFontColor()}),n.selectAll(".c3 .c3-axis path").style({"stroke-width":this.axisLineWidth()+"px"}),n.selectAll(".c3 .c3-axis-x path, .c3 .c3-axis-x line").style({stroke:this.xAxisBaselineColor()}),n.selectAll(".c3 .c3-axis-y path, .c3 .c3-axis-y line").style({stroke:this.yAxisBaselineColor()}),n.selectAll(".c3-axis-x-label").style({"font-family":this.xAxisTitleFontFamily(),"font-size":this.xAxisTitleFontSize(),stroke:this.xAxisTitleFontColor()}),n.selectAll(".c3-axis-y-label").style({"font-family":this.yAxisTitleFontFamily(),"font-size":this.yAxisTitleFontSize(),stroke:this.yAxisTitleFontColor()})},n.prototype.getChartOptions=function(){var t=e.prototype.getChartOptions.apply(this,arguments);switch(this.xAxisType()){case"category":t.categories=this.getC3Categories(),t.columns=this.getC3Columns();break;case"indexed":case"timeseries":t.columns=this.getC3Columns()}return t},n});