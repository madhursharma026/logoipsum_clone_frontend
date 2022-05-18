import requests
from . import db
from flask import Blueprint, request, jsonify

views = Blueprint('views', __name__)

@views.route('/search_word_for_data_1/<SearchWord>', methods=['GET'])
def search_word_for_data_1(SearchWord):
    images = []
    title = []
    description = []
    output_data_list_for_1 = []
    output_data_list_for_2 = []
    output_data_list_for_3 = []
    url = ("https://api.tvmaze.com/search/shows?q=" + SearchWord)
    url_request = requests.get(url)
    url_json_for_1 = url_request.json()[:1]
    for data in url_json_for_1:
        images.append(data.get('show').get('image').get('original'))
        title.append(data.get('show').get('summary')[:120])
        description.append(data.get('show').get('name'))
    output_data_list_for_1.append(images)
    output_data_list_for_1.append(title)
    output_data_list_for_1.append(description)
    return jsonify(output_data_list_for_1)


@views.route('/search_word_for_data_2/<SearchWord>', methods=['GET'])
def search_word_for_data_2(SearchWord):
    images = []
    title = []
    description = []
    output_data_list_for_2 = []
    url = ("https://api.tvmaze.com/search/shows?q=" + SearchWord)
    url_request = requests.get(url)
    url_json_for_2 = url_request.json()[1:2]
    for data in url_json_for_2:
        images.append(data.get('show').get('image').get('original'))
        title.append(data.get('show').get('summary')[:120])
        description.append(data.get('show').get('name'))
    output_data_list_for_2.append(images)
    output_data_list_for_2.append(title)
    output_data_list_for_2.append(description)
    return jsonify(output_data_list_for_2)


@views.route('/search_word_for_data_3/<SearchWord>', methods=['GET'])
def search_word_for_data_3(SearchWord):
    images = []
    title = []
    description = []
    output_data_list_for_3 = []
    url = ("https://api.tvmaze.com/search/shows?q=" + SearchWord)
    url_request = requests.get(url)
    url_json_for_1 = url_request.json()[2:3]
    for data in url_json_for_1:
        images.append(data.get('show').get('image').get('original'))
        title.append(data.get('show').get('summary')[:120])
        description.append(data.get('show').get('name'))
    output_data_list_for_3.append(images)
    output_data_list_for_3.append(title)
    output_data_list_for_3.append(description)
    return jsonify(output_data_list_for_3)

