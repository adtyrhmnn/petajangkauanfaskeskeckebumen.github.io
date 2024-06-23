ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([348481.429654, 9146593.469003, 362392.968802, 9155727.693883]);
var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_jangkauanfasilitaskesehatanfinal_1 = new ol.format.GeoJSON();
var features_jangkauanfasilitaskesehatanfinal_1 = format_jangkauanfasilitaskesehatanfinal_1.readFeatures(json_jangkauanfasilitaskesehatanfinal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_jangkauanfasilitaskesehatanfinal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jangkauanfasilitaskesehatanfinal_1.addFeatures(features_jangkauanfasilitaskesehatanfinal_1);
var lyr_jangkauanfasilitaskesehatanfinal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jangkauanfasilitaskesehatanfinal_1, 
                style: style_jangkauanfasilitaskesehatanfinal_1,
                popuplayertitle: "jangkauan fasilitas kesehatan final",
                interactive: true,
    title: 'jangkauan fasilitas kesehatan final<br />\
    <img src="styles/legend/jangkauanfasilitaskesehatanfinal_1_0.png" /> Sangat Dekat<br />\
    <img src="styles/legend/jangkauanfasilitaskesehatanfinal_1_1.png" /> Dekat<br />\
    <img src="styles/legend/jangkauanfasilitaskesehatanfinal_1_2.png" /> Sedang<br />\
    <img src="styles/legend/jangkauanfasilitaskesehatanfinal_1_3.png" /> Jauh<br />\
    <img src="styles/legend/jangkauanfasilitaskesehatanfinal_1_4.png" /> Sangat Jauh<br />'
        });
var format_Pemukiman_2 = new ol.format.GeoJSON();
var features_Pemukiman_2 = format_Pemukiman_2.readFeatures(json_Pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_2.addFeatures(features_Pemukiman_2);
var lyr_Pemukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_2, 
                style: style_Pemukiman_2,
                popuplayertitle: "Pemukiman",
                interactive: false,
                    title: '<img src="styles/legend/Pemukiman_2.png" /> Pemukiman'
                });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: "jalan",
                interactive: false,
                    title: '<img src="styles/legend/jalan_3.png" /> jalan'
                });
var format_faskes_4 = new ol.format.GeoJSON();
var features_faskes_4 = format_faskes_4.readFeatures(json_faskes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_faskes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faskes_4.addFeatures(features_faskes_4);
var lyr_faskes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_faskes_4, 
                style: style_faskes_4,
                popuplayertitle: "faskes",
                interactive: true,
                    title: '<img src="styles/legend/faskes_4.png" /> faskes'
                });

lyr_ESRIStandard_0.setVisible(true);lyr_jangkauanfasilitaskesehatanfinal_1.setVisible(true);lyr_Pemukiman_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_faskes_4.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_jangkauanfasilitaskesehatanfinal_1,lyr_Pemukiman_2,lyr_jalan_3,lyr_faskes_4];
lyr_jangkauanfasilitaskesehatanfinal_1.set('fieldAliases', {'jangkauan1': 'jangkauan1', 'jangkauan': 'jangkauan', 'id': 'id', '_uid_': '_uid_', 'nama_desa': 'nama_desa', 'wadmkc': 'wadmkc', 'jangkaua_1': 'jangkaua_1', });
lyr_Pemukiman_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tunnel': 'tunnel', 'surface': 'surface', 'name': 'name', 'width': 'width', 'highway': 'highway', 'oneway': 'oneway', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', });
lyr_faskes_4.set('fieldAliases', {'id': 'id', 'namobj': 'namobj', 'luas': 'luas', 'remark': 'remark', 'tipsht': 'tipsht', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'fskadd': 'fskadd', });
lyr_jangkauanfasilitaskesehatanfinal_1.set('fieldImages', {'jangkauan1': 'TextEdit', 'jangkauan': 'TextEdit', 'id': 'TextEdit', '_uid_': 'TextEdit', 'nama_desa': 'TextEdit', 'wadmkc': 'TextEdit', 'jangkaua_1': 'TextEdit', });
lyr_Pemukiman_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_jalan_3.set('fieldImages', {'osm_id': '', 'osm_type': '', 'tunnel': '', 'surface': '', 'name': '', 'width': '', 'highway': '', 'oneway': '', 'layer': '', 'bridge': '', 'smoothness': '', });
lyr_faskes_4.set('fieldImages', {'id': 'TextEdit', 'namobj': 'TextEdit', 'luas': 'TextEdit', 'remark': 'TextEdit', 'tipsht': 'TextEdit', 'fcode': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'fskadd': 'TextEdit', });
lyr_jangkauanfasilitaskesehatanfinal_1.set('fieldLabels', {'jangkauan1': 'no label', 'jangkauan': 'no label', 'id': 'no label', '_uid_': 'no label', 'nama_desa': 'no label', 'wadmkc': 'no label', 'jangkaua_1': 'no label', });
lyr_Pemukiman_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'name': 'no label', 'width': 'no label', 'highway': 'no label', 'oneway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', });
lyr_faskes_4.set('fieldLabels', {'id': 'hidden field', 'namobj': 'no label', 'luas': 'hidden field', 'remark': 'no label', 'tipsht': 'hidden field', 'fcode': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'fskadd': 'hidden field', });
lyr_faskes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});